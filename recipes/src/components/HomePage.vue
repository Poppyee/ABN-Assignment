<template>

  <div id="background">
  </div>
  <div style="align-content: center; display: inline-block;">
    <h1>Todays Top Picks</h1>
    <div class="card" style="width: 40rem; height: 40rem; opacity: 100%;">
      <div id="carouseIIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500"
        data-bs-wrap="true">
        <ol class="carousel-indicators active">
          <div v-for="(image, index) in picturesForCarosel" :key="index">
            <li data-target="#carouseIIndicators" :data-bs-slide-to="index" :class="'active'"></li>
          </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(pictureDetails, index) in picturesForCarosel" :key="index"
            :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
            <a :href="'/meal/'+pictureDetails[3]">
              <img class="d-block w-100" :src="pictureDetails[0]" :alt="pictureDetails[1]"
                :href="'/meal/'+pictureDetails[3]" />
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>{{pictureDetails[1]}}</h5>
              <p>{{pictureDetails[2]}}</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouseIIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouseIIndicators" role="button" data-bs-slide="next">
          <span class="sr-only">Next</span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data () {
    return {
      /* Required to access all api endpoints */
      upgradedAPIKey: '9973533',
      picturesForCarosel: []
    }
  },

  methods: {
    /* Returns 10 images used for the carousel */
    get10Images () {
      axios
        .get('https://www.themealdb.com/api/json/v2/' + this.upgradedAPIKey + '/randomselection.php')
        .then(response => {
          response.data.meals.forEach(meal => this.picturesForCarosel.push([meal.strMealThumb, meal.strArea, meal.strCategory, meal.idMeal]))
          console.log('this.picturesForCarosel', this.picturesForCarosel)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.get10Images()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  display: block;
  background-image: url('../assets/meal-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  opacity: 0.3;
  position: absolute;
  left: 0;
  filter: grayscale(1);
}

#background~* {
  position: relative;
}

.card {
  box-shadow: 0 0 25px #545352;
  border-radius: 30px;
  overflow: hidden;
}

.carousel-caption {
  text-shadow: 1px 1px 2px black, 0 0 25px #545352, 0 0 5px black;
}

.carousel-control-next {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #545352, 0 0 5px black;
  text-decoration: none;
  opacity: .8;
}

.carousel-control-prev {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #545352, 0 0 5px black;
  text-decoration: none;
  opacity: .8;
}

.carousel-control-next:hover {
  opacity: 1;
}

.carousel-control-prev:hover {
  opacity: 1;
}

h1 {
  padding: 20px;
}
</style>
