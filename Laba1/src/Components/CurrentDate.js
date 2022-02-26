export const CurrentDate = () =>{
    const currentTime = new Date();
    let day = currentTime.getDate();
    let month = currentTime.getMonth()+1;
    let year = currentTime.getFullYear();

    if(day<10) day = '0' + day;
    if(month<10) month = '0' + month;

   return(<h2>{day}.{month}.{year}</h2>)
}