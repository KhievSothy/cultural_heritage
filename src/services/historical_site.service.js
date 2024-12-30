import apiClient from "./apiClient";

export class HistoricalSiteService {
  static async GetById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/historical_sites/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/historical_sites");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetEnabled() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/historical_sites/enabled");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Create(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/historical_sites", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Update(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.put(
        "/historical_sites/" + data.id,
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
      const response = await apiClient.delete("/historical_sites/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async UploadImage(id, formData) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post(
        "/historical_sites/" + id + "/upload",
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
        "/historical_sites/" + id + "/upload"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
