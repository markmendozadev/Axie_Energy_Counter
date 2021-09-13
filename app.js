"use strict";
const count = document.querySelector("#count");
const energy_counter_Form = document.querySelector("#energy_counter_Form");
const add_energy_button = document.querySelector("#add_energy");
const remove_energy_button = document.querySelector("#remove_energy");
const skip_button = document.querySelector("#skip");
const reset_button = document.querySelector("#reset");

// Current Energy
let starting_energy = 3;
let current_energy = (energy_counter_Form[0].value = starting_energy);

let adder = 1;
const add_Energy = (e) => {
  e.preventDefault();
  if (current_energy >= 10) {
    alert("Energy Cannot be more than 10.");
  } else {
    current_energy += adder;
    count.innerHTML = `${current_energy}/10`;
  }
};

const remove_Energy = (e) => {
  e.preventDefault();
  if (current_energy <= 0) {
    alert("Cannot be less than 0 energy");
  } else {
    current_energy -= adder;
    count.innerHTML = `${current_energy}/10`;
  }
};
const skip = (e) => {
  e.preventDefault();

  if (current_energy >= 10) {
    alert("Energy Cannot be more than 10.");
  } else if (current_energy === 9) {
    current_energy += 1;
    count.innerHTML = `${current_energy}/10`;
  } else {
    current_energy += 2;
    count.innerHTML = `${current_energy}/10`;
  }
};
const reset = (e) => {
  e.preventDefault();
  current_energy = starting_energy;
  count.innerHTML = `3/10`;
};

// Event Listeners
add_energy_button.addEventListener("click", add_Energy);
remove_energy_button.addEventListener("click", remove_Energy);
reset_button.addEventListener("click", reset);
skip_button.addEventListener("click", skip);
