// ====================================================================================
// Example usecase
// ====================================================================================
// const replacement = { name: 'Chema', surname: 'Alfonso', destiny: '🏠' }
// const useCase     = "Welcome to {destiny} {name} {surname}".format(replacement)
// 
// console.log(useCase) // Welcome to 🏠 Chema Alfonso
// ====================================================================================

String.prototype.format = String.prototype.format ||
function () {
    "use strict"

    const str               = this.toString()
    const targetHasContent  = !!str && str.length
    const hasArgument       = !!arguments.length
    const replacements      = arguments[0] || ['']
    const isValidArgument   = typeof replacements === 'object' && !Array.isArray(replacements)

    if (!targetHasContent || !hasArgument || !isValidArgument) return str;

    const matchingPattern = new RegExp(`\\{.+?\\}`, 'gi')
    const formattedStr    = str.replace(matchingPattern, m => replacements[m.slice(1, m.length - 1)] || m)

    return formattedStr

}