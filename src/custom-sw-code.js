setTimeout(() => {
    self.registration.showNotification("Hello, world!")
    }, 15000)
    
    // register a custom navigation route
    const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
    // ...
    })
    workbox.routing.registerRoute(customRoute)