const AdminFixtureService = require('../fixture.service.js');

class CategoryFixtureService extends AdminFixtureService {
    setCategoryFixture(userData) {
        return this.apiClient.post('/v*/category?_response=true', userData);
    }
}

module.exports = CategoryFixtureService;

global.CategoryFixtureService = new CategoryFixtureService();
