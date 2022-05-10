export const dateDiffInDays = (dateTo) => {
    const today = new Date();
    const utc1 = Date.UTC(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate());
    const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.abs(Math.floor((utc2 - utc1) / 86400000));
  }