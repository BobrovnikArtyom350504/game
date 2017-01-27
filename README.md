Architecture
---
* **Core**
    * **Game** - managing scenes
        * **instance** - singleton Game instance
        * **root** - DOM root for rendering scenes
        * **scenes{}** - map with scene class as a key and scene instance as a value
        * **sceneStack[]** - stack with opened scenes
    * **Scene** - managing entities
        * *static* **veiw** - scene React component
    * **Entity** - object on scene containing components
        * **components{}** - map with component class as a key and component instance as a value
    * **Component** - containing logic
        * **entity** - entity to which is attached a component
* **Game**
    * **Scenes**
    * **Views** - scene root React components
    * **Entities** - custom logic
    * **Components**
