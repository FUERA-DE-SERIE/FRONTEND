import axios from 'axios'

export const GetBestSellers = () => {
  const dishes = [];

   //List Task
  const listTasks = () => {
    axios
      .get("http://localhost:5000/api/dish/list")
      .then((res) => {
        const data = res.data;
        data.map((dish) => {
          dishes.push(dish)
          return data
        })
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
    });
  }

  listTasks();

  return dishes
}