interface Eat {
  eat(food: string): void
}

interface Run {
  run(distance: number): void
}

class Rabbit implements Eat, Run {
  eat(food: string): void {
    console.log(`兔子呼噜呼噜的吃${food}`)
  }

  run(distance: number): void {
    console.log(`兔子跑了${distance}`)
  }
}

class Car implements Eat, Run {
  eat(food: string): void {
    console.log(`汽车加了${food}`)
  }

  run(distance: number): void {
    console.log(`汽车开了${distance}`)
  }
}
