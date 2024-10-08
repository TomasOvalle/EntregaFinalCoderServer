class Service {
  constructor(repository) {
    this.repository = repository;
  }

  createService = async (data) => {
    try {
      const one = await this.repository.createRepository(data);
      return one;
    } catch (error) {
      throw error;
    }
  };

  getProductsBySupplier = async (user_id) => {
    try {
        const products = this.repository.readBySupplierRepository(user_id);
        return products;
    } catch (error) {
        throw error;
    }
};

  readService = async (role) => {
    try {
      const all = await this.repository.readRepository(role);
      return all;
    } catch (error) {
      throw error;
    }
  };

  paginateService = async ({ filter, opts }) => {
    try {
      const all = await this.repository.paginateRepository( filter, opts );
      return all;
    } catch (error) {
      throw error;
    }
  };

  readByEmailService = async (email) => {
    try {
      const one = await this.repository.readByEmailRepository(email);
      return one;
    } catch (error) {
      throw error;
    }
  };

  readOneService = async (uid) => {
    try {
      const one = await this.repository.readOneRepository(uid);
      return one;
    } catch (error) {
      throw error;
    }
  };

  updateService = async (uid, data) => {
    try {
      const one = await this.repository.updateRepository(uid, data);
      return one;
    } catch (error) {
      throw error;
    }
  };

  destroyService = async (uid) => {
    try {
      const one = await this.repository.destroyRepository(uid);
      return one;
    } catch (error) {
      throw error;
    }
  };


}

  export default Service;