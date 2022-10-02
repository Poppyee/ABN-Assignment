<template>

  <div class="container" style="padding-top: 20px">
    <div class="row">
      <div id="mealIngredients">
        <div class="card">
          <div class="card-body left">
            <h5 class="card-title center">Ingredients</h5>
            <ul class="overflow-y-auto">
              <li v-for="(item, index) in ingredientsAndMeasurements" :key="index">{{item[0]}}: {{item[1]}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mealPicture">
        <div class="card">
          <div class="row items-center">
            <div class="col-12">
              <img class="card-img-top" :src="chosenMeal[1]" alt="Card image cap">
            </div>
            <div class="col-12">
              <div class="card-body">
                <h5 class="card-title">{{chosenMeal[0]}}</h5>
                <p class="card-text">{{chosenMeal[5]}} {{chosenMeal[6]}} {{chosenMeal[7]}}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                  data-bs-target="#modalCenter">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mealInstructions">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Instructions</h5>
            <ol class="overflow-y-auto">

              <li class="card-text left" v-for="(step, index) in structuredInstructions" :key="index">{{step}}</li>
            </ol>

          </div>
        </div>
      </div>
    </div>
  </div>





  <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Recipe Instructional Video</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="youTubeLink !== ''">
            <iframe width="420" height="315" :src="youTubeLink">
            </iframe>
          </div>
          <div v-else>
            Sorry there is no youtube video available for this recipe
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'ChosenMeal',
  props: ['id'],

  data() {
    return {
      chosenMeal: [],
      youTubeLink: String,
      ingredients: [],
      measurements: [],
      ingredientsAndMeasurements: [],
      structuredInstructions: []
    }
  },

  methods: {
    getChosenMealDetails(id) {
      console.log('getImages')
      axios
        .get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(response => {
          this.chosenMeal = [response.data.meals[0].strMeal, response.data.meals[0].strMealThumb, response.data.meals[0].strYoutube, [], response.data.meals[0].strInstructions, response.data.meals[0].strArea, response.data.meals[0].strCategory, response.data.meals[0].strTags]
          this.youTubeLink = response.data.meals[0].strYoutube.replace('watch?v=', 'embed/')
          this.structuredInstructions = response.data.meals[0].strInstructions.split(".");
          this.structuredInstructions.splice(-1) //needed to remove the empty array element after the final '.'

          for (var item in response.data.meals[0]) {
            if (response.data.meals[0][item] != null) {
              if (item.includes('Ingredient') && response.data.meals[0][item].trim().length != 0) {
                this.ingredients.push(response.data.meals[0][item])
              }
              if (item.includes('Measure') && response.data.meals[0][item].trim().length != 0) {
                this.measurements.push(response.data.meals[0][item])
              }
            }

          }

          this.ingredientsAndMeasurements = this.ingredients.map((ingredient, i) => [ingredient, this.measurements[i]]);

        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      return this.image
    },

  },

  mounted() {
    this.getChosenMealDetails(this.id);
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  background-color: #F8F9FA;
  border: none;
  box-shadow: 0px 4px 2px 2px rgba(34, 34, 34, 0.08);
}

.overflow-y-auto {
  overflow-y: auto;
  height: 360px;
}
.items-center {
  align-items: center;
}

#mealIngredients {
  width: 400px;

}

#mealIngredients .card, #mealInstructions .card {
  height: 100%;
}


#mealIngredients, #mealInstructions,  #mealPicture {
  margin-top: 5px;
  margin-bottom: 5px;
}


#mealIngredients ul {
  height: 360px;
  display: flex;
  flex-direction: column;
}

#mealIngredients li:not(:first-child) {
  margin-top: auto;
}

#mealIngredients li:not(:last-child) {
  margin-bottom: auto;
}

#mealPicture {
  flex-basis: 300px;
  flex-grow: 1;
  min-width: 0px;

}

#mealInstructions {
  width: 600px
}

/* #mealInstructions ol{
  height: calc(100% - 24px - 8px);
} */

ul {
  padding-left: 1.1em;
}

.left {
  text-align: left;
}

.center {
  text-align: center;
}

.card-text {
  padding: 2px;
}

.btn-primary {
  background-color: #00857a;
  border-color: #00857a
}
</style>
