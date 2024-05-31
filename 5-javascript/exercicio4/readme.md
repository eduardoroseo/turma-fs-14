# Instalação sweet alert2

[Download](https://sweetalert2.github.io/#download)

```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

## Usar o sweet alert

Basta chamar a função Swal.fire() com seus parametros

```js
let config = {
    icon: "error",
    title: "Oops...",
    text: "Distância total inválida!",
}

Swal.fire(config);
```