# Declarative

### Use predefined composables/components/utilities to build Vue 3 applications faster

# Get started

Add following line to `"dependencies"` of your `package.json` file
```json
 "declarative": "git://github.com/arcranium/declarative.git#development"
```

Then initialize the plugin with tailwind configuration at your `main.js/main.ts`
```ts
app.use(DeclarativePlugin({
    tailwindConfig: tailwindConfig
}));
```