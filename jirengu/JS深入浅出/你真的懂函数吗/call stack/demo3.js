function fab (n) {
  console.log(`start calc fab ${n}`)
  if (n >= 3) {
    return fab(n - 1) + fab(n - 2)
  } else {
    return 1
  }
}

fab(5)
