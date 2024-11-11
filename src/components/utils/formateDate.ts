export const formateDate = (date: string) =>{
    return new Date(date).toLocaleDateString('en-us', {
        month: 'long',
        year: 'numeric',
        day:'2-digit'
    })
}