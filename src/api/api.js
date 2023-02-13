import axios from "axios";

//instance of Axios
let axiosInstance = axios.create({
  baseURL: "https://playfulvoluminousobjects.tomphillimore.repl.co/",
});

//start request
axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("jwt_access")) {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
      };
    }
    return config;
  },
  (error) => {
    //errors from frontend
  }
);
//end request
axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("jwt_access")) {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_access")}`,
      };
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      // if (error.response.data.messages[0].message ==='Token is invalid or expired') {
      return axiosInstance
        .post("api/token/refresh/", {
          refresh: localStorage.getItem("jwt_refresh"),
        })
        .then((res) => {
          localStorage.setItem("jwt_access", res.data.access);
          console.log(res);
        });
    }

    //redirection?
    // if (error.response.status === 401) {
    //   console.log(":(")
    // }
  }
);

const itemsAPI = {
  getItems(pageNum) {
    return axiosInstance
      .get(`properties?page=${pageNum}&page_size=6`)
      .then((response) => response.data);
  },
  getAllItems() {
    return axiosInstance
      .get(`properties/`)
      .then((response) =>
        console.log(response.data.filter((elem) => elem.addedToCart === true))
      );
  },

  changeCart(itemId, addedToCart) {
    return axiosInstance.patch(`properties/${itemId}/`, {
      addedToCart: addedToCart,
    });
  },
  getCurrentItem(itemId) {
    return axiosInstance.get(`properties/${itemId}`);
  },
};

const authAPI = {
  login(username, password) {
    const token_data = {
      username: username,
      password: password,
    };
    return axiosInstance.post("api/token/", token_data).then((res) => {
      localStorage.setItem("jwt_access", res.data.access);
      localStorage.setItem("jwt_refresh", res.data.refresh);
    });
  },
  logout() {
    localStorage.removeItem("jwt_access");
    localStorage.removeItem("jwt_refresh");
    console.log("logout");
  },
};
itemsAPI.getAllItems();
export { itemsAPI, authAPI };
