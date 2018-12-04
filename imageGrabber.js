const imageUrlBuilder = require('@sanity/image-url')
const sanityClientCreator = require('@sanity/client')
const sanityClient = sanityClientCreator({
    projectId: 'czqk28jt',
    dataset: `dev_bk`,
    token: "sk2lnZPmyyk3Pb26N95jg5oFcMFmKQ5ATvduWaS6MC1H7cuWa2rZtcQnVeFooBNFUGbKkmJuM2ftzManB6BMAmoi5gZXnBcVN2NGvpoPvV02qcOhwsJbbC7uVqfXh44mQwp5HeknXknvpiqTorvI8Nh4hWMssIYJaFXacbjOjvoCuZAIyehC",
    useCdn: false,
});
const sanityImageBuilder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return sanityImageBuilder.image(source)
}

const url = urlFor("image-1ccf7f90c46853f8a2960beee561871e4d4adba7-870x570-png")
console.log(url)