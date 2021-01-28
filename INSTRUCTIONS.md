# FindHotel Front-end Engineer Assignment

Thanks for applying for the Front-end Engineer position at FindHotel!

This coding challenge will serve as the first step of technical evaluation in the hiring process, the goal is to show case how you work and if it is decided to proceed with the process, will be the starting point of our technical interview.

There are two parts to the challenge, the first is developing the visual components of a supplied design. The second part is about how you implement, test and explain business logic.

## Time to spend on the assignment

We don't assign a fixed time deadline for it, but after you’ve read the assignment, please let us know when you’re planning to complete it. After you complete the assignment we'll review it internally and if we evaluate it to be positive, we'll schedule a technical interview to discuss the results together. As said, feel free to make some concessions under time pressure, just let us know what parts you've focused on most.

## Technology and Frameworks

This project is based on React as that is what we use here at FindHotel, however this is not a hard requirement. If you prefer to use another technology, feel free to set up the assignment with your tools of choice.

We use Redux at FindHotel, but again you're free to choose any state management technology you'd like.

Finally, we prefer to use a typed dialect such as TypeScript or Flow, so it is a plus for you to showcase the use of it, but you are allowed to use any JS flavor.

Styling can be done via CSS, or a CSS-in-JS framework of your choice (we use https://github.com/emotion-js/emotion).

## The assignment

Please note for this assignment you are not required to build any server side logic, you can build all logic in the client-side.

### The Guest and Room Selector component

Please see the following screenshots for the designs to build. 

TODO: Add images

| Room Selection Screen                                           | Room Basket Overlay                                                     |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Room Selection](1-room-selection.png "Room Selection Screen") | ![Room Basket Overlay](2-room-basket-overlay.png "Room Basket Overlay") |


### Business requirements

#### Input and output
The component should receive its input from the user manipulating the UI or a initial state and emit its output as a serialized string. 
We use this to allow the Guests and Rooms configuration to be passed in via the URL in an encoded manner, and update the URL for sharing with others after the component state is "comitted" (via the `Update` button).

The rules for the output format are the following:
- Rooms are separated by pipe ( | );
- Adults and children are separated by colon ( : );
- Children ages are separated by comma ( , ).

Examples
"1:4,6|3" → Two rooms, one with one adult and two children ages 4 and 6 and the other with 3 adults and no children.
"3" → 3 adults and no children
"2:4" → 2 adults and one child aged 4
"1:0,13,16" → 1 adult and 3 children (aged 0, 13 and 16)

Note: Keep in mind this is the serialized representation of a valid component state, you can keep a different intermediate data structure of your choice to manage internal state.

#### Functional requirements
These are the requirements the component need to abide to be deemed functional.

* Up to eight rooms can be added
* Each room has at least one adult and up to a maximum of five
* Each room has zero or more children up to a maximum of three
* Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room
* Each room has a maximum occupancy of five. This is, adults plus children per room
* The Guest and Room selector should always yield a valid room occupancy
* Apply sensible defaults to the initial room occupation if the user is using the component for the first time
* A user can either choose `Update` to commit the output, or click the `x` on top to reset the chosen room selection, revert back to the original state and emit this.

#### Non Functional requirements
##### Configurability
The functional requirements can change in the future, what can you do to make sure the component is easiliy configurable

##### Usability
It should be evident to the user how to operate the component. We are here to help the user to understand what are their options and guide them.

##### Testability
It is recommended to write automated tests (unit or integration) to verify and document the business logic.
We leave to you to decide which parts of the implementation should be covered by tests, given the constraint of time.

### Evaluation criteria

We will evaluate the assignment according to the following aspects:

* Correctness, bug free implementation according to the requirements
* Code quality, how clean, readable, organized and future proof your code is
* Visual implementation, how close your component implementation is to the supplied designs
* Quality assurance, how much confidence your automated tests add to the implementation

### Bonus points

* Allow the input as props and emit a Redux action (or other state management framework of choice) as output
* Exercise the component interactively with an appropriate test library
* Use git best practices, commit messages and such

Good luck! If you have any questions around the assignment, feel free to reach out :)