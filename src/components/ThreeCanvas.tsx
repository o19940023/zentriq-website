'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
    camera.position.z = 220
    camera.position.y = 80
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Particles Configuration
    const numParticlesX = 45
    const numParticlesZ = 45
    const separation = 8
    const numParticles = numParticlesX * numParticlesZ

    const positions = new Float32Array(numParticles * 3)
    const colors = new Float32Array(numParticles * 3)

    // Generate grid positions and gradients
    let i = 0
    for (let ix = 0; ix < numParticlesX; ix++) {
      for (let iz = 0; iz < numParticlesZ; iz++) {
        // Position
        positions[i] = ix * separation - (numParticlesX * separation) / 2 // x
        positions[i + 1] = 0 // y
        positions[i + 2] = iz * separation - (numParticlesZ * separation) / 2 // z

        // Color Gradient from Purple (#9D5CFF) to Cyan (#00D9FF)
        const ratioX = ix / numParticlesX
        const ratioZ = iz / numParticlesZ
        const mixRatio = (ratioX + ratioZ) / 2

        // Purple: R=157, G=92, B=255 -> 0.61, 0.36, 1.0
        // Cyan: R=0, G=217, B=255 -> 0.0, 0.85, 1.0
        const r = 0.61 * (1 - mixRatio) + 0.0 * mixRatio
        const g = 0.36 * (1 - mixRatio) + 0.85 * mixRatio
        const b = 1.0 * (1 - mixRatio) + 1.0 * mixRatio

        colors[i] = r
        colors[i + 1] = g
        colors[i + 2] = b

        i += 3
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Particle Texture creation dynamically
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 16
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 16, 16)
    }
    const texture = new THREE.CanvasTexture(canvas)

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      map: texture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Interaction mouse handler
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) * 0.1
      targetMouseY = (event.clientY - window.innerHeight / 2) * 0.1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let count = 0
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      count += 0.03

      // Smooth mouse interpolation (easing)
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Wave calculation
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute
      const array = positionAttr.array as Float32Array

      let idx = 0
      for (let ix = 0; ix < numParticlesX; ix++) {
        for (let iz = 0; iz < numParticlesZ; iz++) {
          // Compute wave displacement based on distance from mouse coordinates
          const posX = array[idx]
          const posZ = array[idx + 2]
          
          // Original sine/cosine waves
          let yVal = Math.sin(ix * 0.15 + count) * 8 + Math.cos(iz * 0.15 + count) * 8

          // Mouse interference
          const distToMouse = Math.sqrt((posX - mouseX) ** 2 + (posZ - mouseY * 0.5) ** 2)
          if (distToMouse < 80) {
            yVal += (80 - distToMouse) * 0.25 * Math.sin(count * 2)
          }

          array[idx + 1] = yVal
          idx += 3
        }
      }

      positionAttr.needsUpdate = true

      // Camera motion based on mouse
      camera.position.x += (mouseX - camera.position.x) * 0.02
      camera.position.y += (80 - mouseY * 0.5 - camera.position.y) * 0.02
      camera.lookAt(0, -10, 0)

      // Slow overall rotation
      particles.rotation.y = count * 0.02

      renderer.render(scene, camera)
    }

    animate()

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      
      // Dispose materials & geometries
      geometry.dispose()
      material.dispose()
      texture.dispose()
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [mounted])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 select-none z-0 overflow-hidden"
    />
  )
}
