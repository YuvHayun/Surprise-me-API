// The abstract class to be implemented by the other suprise sub-classes.
class GetSurpriseSuperClass {
    constructor(index){
        this.index = index;
    }
 
    // Abstract method to be implemented by sub-classes
    surprise(name) {
       throw new Error('This method to be implemented by the sub-class');
    } 
}


module.exports = GetSurpriseSuperClass;