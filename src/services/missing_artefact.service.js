import apiClient from "./apiClient";

export class MissingArtefactService {
  static async GetById(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/lost_artefact/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/lost_artefact");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetEnabled() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.get("/lost_artefact/enabled");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Create(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/lost_artefact", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Update(data) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.put(
        "/lost_artefact/" + data.id,
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
      const response = await apiClient.delete("/lost_artefact/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async UploadImage(id, formData) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post(
        "/lost_artefact/" + id + "/upload",
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
        "/lost_artefact/" + id + "/upload"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
