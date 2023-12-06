export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear().toString();
    const month = (d.getMonth() + 101).toString().substring(1);
    const day = (d.getDate() + 100).toString().substring(1);
    return day + "-" + month + "-" + year;
}