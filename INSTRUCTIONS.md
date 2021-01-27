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

Room Selection Screen | Room Basket Overlay
-|-
![Room Selection](1-room-selection.png "Room Selection Screen") | ![Room Basket Overlay](2-room-basket-overlay.png "Room Basket Overlay")


### Business requirements

#### Input and output
The component should receive its input and emit its output as a string. We use this to allow the Guest and Room selection to be passed in via the URL in an encoded manner, and update the URL for sharing with others after the component state is "comitted" (via the `Update` button).

The format is as follows:

TODO: Describe serialization format

Note: Keep in mind this is the serialized representation of a valid component state, you can keep a different intermediate data structure of your choice to manage internal state.

#### Business logic:
* Each room can have one or more adults, with a maximum of five
* Each room can have zero or more children, with a maximum of three
* Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room
* Each room has a maximum occupancy of five, this is adults plus children per room
* The Guest and Room selector should always yield a valid room occupancy, meaning at least one adult in one room
* A maximum of eight rooms can be selected

Keep in mind that the user can either choose `Update` to commit the output, or click the `x` on top to reset the chosen room selection, revert back to the original state and emit this.

It is recommended to write automated tests (unit or integration) to verify and document the business logic.


### Judgment criteria

TODO: Describe how we evaluate the assignment and what we value.

### Bonus points

* Allow the input as props and emit a Redux action (or other state management framework of choice) as output
* Exercise the component interactively with an appropriate test library
* Use git best practices, commit messages and such
