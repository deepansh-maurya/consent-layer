

export class HttpDS {

    private static _instance: HttpDS

    static get instance() {
        if (this._instance) {
            this._instance = new HttpDS()
        }
        return this._instance
    }

    private constructor() {

    }

    private async callToServer(route: string, body: any, method: string, query: string = '') {
        try {
            return (await fetch(`${route}${query}`, {
                body: body,
                headers: {
                    Authorization: `Bearer`,
                },
                method: method
            })).json()
        } catch (error) {
            console.log(error);
        }
    }

    async get(route: string, query: string = '') {
        return this.callToServer(route, undefined, 'GET', query)
    }

    async post(route: string, body: any, query: string = '') {
        return this.callToServer(route, body, 'POST', query)
    }

    async delete(route: string, query: string = '') {
        return this.callToServer(route, undefined, 'DELETE', query)
    }

    async put(route: string, body: any, query: string = '') {
        return this.callToServer(route, body, 'PUT', query)
    }

    async patch(route: string, body: any, query: string = '') {
        return this.callToServer(route, body, 'PACTH', query)
    }
}