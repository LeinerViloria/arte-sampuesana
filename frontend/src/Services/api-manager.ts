class ApiManager
{
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        return response.json();
    }

    async put(endpoint: string, data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
        return response.json();
    }

    async delete(endpoint: string): Promise<void> {
        await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'DELETE',
        });
    }
}

export default ApiManager;