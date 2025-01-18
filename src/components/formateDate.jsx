import { format } from "date-fns";

const formateDate = (date, dateFormat = "yyyy-MM-dd") => {
    const postDate = format(new Date(date), dateFormat);
    return postDate;
};

export default formateDate;