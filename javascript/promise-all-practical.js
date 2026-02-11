function fakeApi(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name + " done")
    }, delay)
  })
}

async function runTasks() {
  const results = await Promise.all([
    fakeApi("Task1", 1000),
    fakeApi("Task2", 500),
    fakeApi("Task3", 1500)
  ])

  console.log(results)
}

runTasks()