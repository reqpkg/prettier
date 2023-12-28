# ✨ reqprettier

Prettier с полностью настроенной конфигурацией для использования в любых проектах. Не задумывайся и быстро запускай проект с готовым Prettier.

## Инструкция по использованию

Необходимо установить пакет `reqprettier` и дать понять, что нужно использовать этот конфиг.

### Установка зависимостей

```bash
npm install reqprettier -D # или другой пакетный менеджер
```

### Включение конфига

Тут предлагается 2 варианта:

#### 1) Через `package.json`

В файле `package.json` добавить:

```jsonc
{
  // ...
  "prettier": "reqprettier"
  // ...
}
```

#### 2) Через импорт конфига из пакета

Дефолтный импорт пакета `reqprettier` возвращает конфиг. Его можно просто установить или расширить.

```js
import reqprettierConfig from 'reqprettier'
```

```js
export default reqprettierConfig
```

или

```js
export default {
  ...reqprettierConfig,
  singleQuote: false,
}
```
