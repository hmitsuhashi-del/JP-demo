# Gainsight CC Widget Development

## このリポジトリについて
Gainsight CC Custom Widget開発用。

## 必ずやること
- 新しいwidgetはwidgets/<widget_name>/ディレクトリに作る
- extensions_registry.jsonのtypeは "my_gs_<widget_name>" の形式
- CSS変数は var(--config--main-color-brand) などGainsightのデザイントークンを使う
- app.jsはES moduleで書き、init(sdk)をexportする

## 参考ドキュメント
- https://developer-portal.gainsight.com/docs/custom-widgets/v2/
