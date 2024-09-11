<template>
    <div>
      <h2>Accident List</h2>
      <table>
        <thead>
          <tr>
            <th>District</th>
            <th>Location</th>
            <th>Deaths</th>
            <th>Injuries</th>
            <th>Incidents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="accident in accidents" :key="accident.id">
            <td>{{ accident.district }}</td>
            <td>{{ accident.location }}</td>
            <td>{{ accident.deaths }}</td>
            <td>{{ accident.injuries }}</td>
            <td>{{ accident.incidents }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccidentList',
    data() {
      return {
        accidents: [
          { id: 1, district: '文山區', location: '基隆路四段、羅斯福路四段', deaths: 0, injuries: 47, incidents: 34 },
          { id: 2, district: '中正區', location: '中山南路、信義路一段', deaths: 0, injuries: 28, incidents: 20 },
          { id: 3, district: '大同區', location: '西寧北路、鄭州路', deaths: 0, injuries: 21, incidents: 18 },
          { id: 4, district: '信義區', location: '市民大道五段、東興路', deaths: 0, injuries: 21, incidents: 16 },
          { id: 5, district: '中山區', location: '大直街、北安路', deaths: 0, injuries: 18, incidents: 16 },
          { id: 6, district: '大安區', location: '和平東路三段、基隆路二段', deaths: 0, injuries: 17, incidents: 16 },
          { id: 7, district: '士林區', location: '中正路、延平北路六段', deaths: 0, injuries: 19, incidents: 11 },
          { id: 8, district: '中正區', location: '和平西路一段、和平東路一段、羅斯福路二段', deaths: 0, injuries: 18, incidents: 11 },
          { id: 9, district: '中正區', location: '市民大道二段、林森北路', deaths: 0, injuries: 19, incidents: 10 },
          { id: 10, district: '大安區', location: '和平東路三段、敦化南路二段', deaths: 0, injuries: 15, incidents: 12 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>