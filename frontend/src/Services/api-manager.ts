class ApiManager
{
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:5000";
    }

    public async get(endpoint: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    public async put(endpoint: string, data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
        return response.json();
    }

    public async delete(endpoint: string): Promise<void> {
        await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'DELETE',
        });
    }
}

export default ApiManager;