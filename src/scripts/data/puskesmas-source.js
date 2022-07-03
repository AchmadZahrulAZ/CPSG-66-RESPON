import API_ENDPOINT from '../global/api-endpoint';

class PuskesmasSource {
  static async listPasien() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async listPuskesmas() {
    const response = await fetch(API_ENDPOINT.LIST_PUSKESMAS);
    const responseJson = await response.json();
    return responseJson;
  }

  //   static async detailRestaurant(id) {
  //     const response = await fetch(API_ENDPOINT.DETAIL(id));
  //     const responseJson = response.json();
  //     if (responseJson.pending === true) {
  //       console.log('Hello');
  //     }
  //     return responseJson;
  //   }

  static async addPasien(pasien) {
    const response = await fetch(`${API_ENDPOINT.ADD_PASIEN}`, {
      method: 'POST',
      body: JSON.stringify(pasien),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  }
}

export default PuskesmasSource;
