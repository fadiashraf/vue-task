<template>
  <div id="section1" class="row">
    <!-- left part -->
    <div class="col-md-6 left-part px-0 mx-0">
      <img src="../assets/fish.png" alt="" class="w-100 h-auto" />
    </div>

    <!-- right part -->
    <div class="col-md-6 right-part">
      <h1 class="section-title px-2">Section 1</h1>

      <table class="table px-2  table-borderless">
        <tbody>
          <tr>
            <td>Population</td>
            <td>Total (1,415,872), Rank (40th)</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>Length 1,522 mi (2,450 km) . Width n/a mi (n/a km)</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Oﬃcial languages English, Hawaiian</td>
          </tr>
          <tr>
            <td>Largest city</td>
            <td>The capital (Honolulu)</td>
          </tr>
          <tr>
            <td>Largest metro</td>
            <td>The largest metro in Island of Oʻahu</td>
          </tr>
          <tr>
            <td>Elevation</td>
            <td>Highest elevation 13,796 ft (4,205.0 m)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSectionOne",
};
</script>

<style scoped>
#section1 {
  padding-top: 4vw;
  padding-bottom: 5.5vw;
}

.table td {
  font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Roboto", scans-serif;
  padding-top: 1.2vw;
  color: #0C0C0C;
}
.table td:first-child{
  color: #707070;
}
</style>