export function getStudents(){
    return fetch('http://localhost:4000/api/students', {mode: 'cors'}).then(
        res => res.json()
    )
}
export function createStudent(data){
    return fetch('http://localhost:4000/api/students', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}


