import apiClient from "./apiClient";

export class MuseumService {
  static async GetById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/museum/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/museum");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetEnabled() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/museum/enabled");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Create(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/museum", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Update(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.put(
        "/museum/" + data.id,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async DeletById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.delete("/museum/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async UploadImage(id, formData) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post(
        "/museum/" + id + "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async DeletImageById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.delete(
        "/museum/" + id + "/upload"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
