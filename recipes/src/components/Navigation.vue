<template>

  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a href="/home">
        <img alt="Logo" src="../assets/logo.png" width="50" height="50" id="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="randomRecipe" class="nav-link active" aria-current="page" :href="'/meal/'+randomId">
              Give me a random recipe
            </a>
          </li>
        </ul>
        <div style="padding-top: 10px;">
          <form>
            <input type="text" id="myInput" @keyup="filterFunction" placeholder="Search Meals" v-model="inputValue"
              title="Type in a meal">
          </form>
          <div v-if="inputValue.length > 0" class="list">
            <ul id="myUL" v-for="(meal, index) in listOfFirstLetter" :key="index" width="100%">
              <li name="mealOption"><a :href="'/meal/'+meal[1]">{{meal[0]}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Navigation',
  props: {
  },
  data () {
    return {
      upgradedAPIKey: '9973533',
      listOfFirstLetter: [],
      inputValue: '',
      randomId: String
    }
  },

  methods: {
    /* Called when user inuts first letter into search bar */
    getMealByLetter (letter) {
      this.listOfFirstLetter = []
      axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + letter)
        .then(response => {
          response.data.meals.forEach(meal => this.listOfFirstLetter.push([meal.strMeal, meal.idMeal]))
        })
        .catch(error => {
          console.log(error)
        })
    },
    /* calls api on first letter, then filters the result by the next letters */
    filterFunction () {
      let filter, li, txtValue
      if (this.inputValue.length === 1) {
        const firstLetter = this.inputValue.charAt(0)
        this.getMealByLetter(firstLetter)
      } else {
        filter = this.inputValue.toUpperCase()
        li = document.getElementsByName('mealOption')
        for (let i = 0; i < li.length; i++) {
          txtValue = li[i].textContent || li.innerText
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ''
          } else {
            li[i].style.display = 'none'
          }
        }
      }
    },
    /* generates a random id from api. This will be used for the url route */
    generateRandomMealId () {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
          this.randomId = response.data.meals[0].idMeal
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  mounted () {
    /* called initally so the user doesnt have to wait */
    this.generateRandomMealId()
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  border-bottom: 2px solid #868686;
  position: sticky;
  top: 0;
  left: 0;
  background-color:#F8F9FA;
  z-index: 10;
}

#randomRecipe {
  box-shadow: 0 0 2px #979695;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #00857a;
  font-size: 16px;
  color: white;
}

.list {
  position: absolute;
  /* border: 1px solid black; */
  z-index: 9;
  padding-top: 10px;
}

.nav-item {
  padding-left: 10px;
}

* {
  box-sizing: border-box;
}

#myInput {
  /* background-image: url('../assets/searchicon.png'); */
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  box-shadow: 0 0 2px #979695;
  border-radius: 4px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  margin-top: -1px;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
