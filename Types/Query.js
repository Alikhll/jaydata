$C('$data.Query', null, null,
{
    constructor: function (expression, entitySet, context) {
        ///<param name="context" type="$data.EntityContext" />
        ///<field name="expression" type="$data.Expressions.ExpressionNode" />
        ///<field name="context" type="$data.EntityContext" />
        Object.defineProperty(this, "expression", { value: expression, enumerable: true });
        Object.defineProperty(this, "context", { value: context, enumerable: true });
        //TODO: expressions get as JSON string?!
        
        this.expressions = expression;
        this.entitySet = entitySet;
        this.actionPack = [];
        this.result = [];
        this.rawDataList = [];
        this.modelBinderConfig = {};
        this.context = context;
        this.sqlConvertMetadata = undefined;
    },
        
    rawDataList: { dataType: "Array" },
    actionPack: { dataType: "Array" },
    result: { dataType: "Array" },
    resultType: {},
    sqlConvertMetadata: { },
    buildResultSet: function (ctx) {
        var converter = new $data.ModelBinder(this.context);
        this.result = converter.call(this.rawDataList, this.modelBinderConfig);
        return;
    }
}, null);