var studentHeight = () => {
  anna = 175;
  brad = 190;
  charlie = 165;

  if (anna > brad) {
    if (anna > charlie) {
      console.log("anna tertinggi")
    } else {
      console.log("anna tertinggi kedua")
    }
  } else {
    if (anna < charlie) {
      console.log("anna terpendek")
    } else {
      console.log("anna terpendek kedua")
    }
  }

  if (brad > anna) {
    if (brad > charlie) {
      console.log("brad tertinggi")
    } else {
      console.log("brad tertinggi kedua")
    }
  } else {
    if (brad < charlie) {
      console.log("brad terpendek")
    } else {
      console.log("brad terpendek kedua")
    }
  }

  if (charlie > brad) {
    if (charlie > anna) {
      console.log("charlie tertinggi")
    } else {
      console.log("charlie tertinggi kedua")
    }
  } else {
    if (charlie < anna) {
      console.log("charlie terpendek")
    } else {
      console.log("charlie terpendek kedua")
    }
  }

}
studentHeight()