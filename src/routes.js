import App from './components/App'

function errorHandling(err) {
    throw new Error(`Dynamic page loading failed: ${err}`)
}

function loadRoute(cb) {
    return module => cb(null, module.default)
}

export default {
    path: '/',
    component: App,
    indexRoute: {
        getComponent(location, cb) {
            System.import('./components/Home')
                .then(loadRoute(cb))
                .catch(errorHandling)
        }
    },
    childRoutes: [{
        path: 'about',
        getComponent(location, cb) {
            System.import('./components/About')
                .then(loadRoute(cb))
                .catch(errorHandling)
        }
    }, {
        path: '*',
        getComponent(location, cb) {
            System.import('./components/Home')
                .then(loadRoute(cb))
                .catch(errorHandling)
        }
    }]
}