Violates LSP

```mermaid
classDiagram
    class Bird {
        +fly()
    }

    class Penguin {
        +fly() x
    }

    Bird <|-- Penguin

```

Applies LSP

```mermaid
classDiagram
    class Bird {
        +move()
    }

    class Penguin {
        +move()
    }

    class Sparrow {
        +move()
    }

    Bird <|-- Penguin
    Bird <|-- Sparrow


```