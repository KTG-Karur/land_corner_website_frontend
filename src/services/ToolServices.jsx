import http from "./http-common";

const getAllFaq = () => {
  return http.get("/setting-faq");
};

const ToolServices = {
    getAllFaq,
};

export default ToolServices;