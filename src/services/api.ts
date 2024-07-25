export class Api {
  
    static async getAll() {
        const response = await fetch('http://localhost:3000/tasks')
        const data = response.json()
        console.log(data)
    }
    static async create(title: string, description: string) {
        await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })
    }

    static async destroy(id: string) {
        await fetch(`http://localhost:3000/${id}`, { 
            method: 'DELETE' 
        })
    }

    static async completeTask(id: string) {
        await fetch(`http://localhost:3000/${id}/complete`, { 
            method: 'PATCH'
        })
    }
}