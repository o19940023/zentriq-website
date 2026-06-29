// Gumroad Overlay Integration
export const initGumroad = () => {
  // Load Gumroad overlay script
  const script = document.createElement('script')
  script.src = 'https://gumroad.com/js/gumroad.js'
  script.async = true
  document.body.appendChild(script)
}

// Track Gumroad purchase event
export const trackPurchase = (productId: string, price: number) => {
  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'Purchase', {
      value: price,
      currency: 'USD',
      content_ids: [productId],
      content_type: 'product',
    })
  }

  // Google Analytics (if you add it)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: price,
      currency: 'USD',
      items: [
        {
          item_id: productId,
          item_name: 'Zentriq Trading Bot',
          price: price,
        },
      ],
    })
  }
}

// Track "Add to Cart" / Checkout Started
export const trackCheckoutStarted = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'InitiateCheckout', {
      value: 299,
      currency: 'USD',
      content_ids: ['zentriq'],
      content_type: 'product',
    })
  }
}

// Track Button Clicks
export const trackButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('trackCustom', 'ButtonClick', {
      button_name: buttonName,
    })
  }
}
