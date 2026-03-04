Lista de comandos do Sequelize: 
_____________________________________________________________________________________
Tipos de String/Binário
    STRING — String de tamanho variável (ex: STRING(255))
    STRING.BINARY — String com collation binária
    TEXT — Texto longo (pode ter tamanhos: "tiny", "medium", "long")
    CITEXT — Texto insensível a maiúsculas/minúsculas (PostgreSQL/SQLite)
    CHAR — String de tamanho fixo
    CHAR.BINARY — String binária de tamanho fixo
    BINARY — Dados binários de tamanho variável
    BLOB — Binary large object (pode ser "tiny", "medium" ou "long")
Tipos Numéricos
    INTEGER — Inteiro padrão (.UNSIGNED, .ZEROFILL)
    BIGINT — Inteiro grande para valores maiores (.UNSIGNED, .ZEROFILL)
    FLOAT — Número ponto flutuante
    REAL — Ponto flutuante (PostgreSQL/MySQL)
    DOUBLE — Ponto flutuante de dupla precisão
    DECIMAL — Decimal com precisão fixa (ex: DECIMAL(10,2))
    TINYINT — Inteiro muito pequeno
    SMALLINT — Inteiro pequeno
    MEDIUMINT — Inteiro médio
    Booleano
    BOOLEAN — Verdadeiro ou falso
Data e Hora
    DATE — Data e hora
    DATEONLY — Apenas data, sem hora
    TIME — Apenas hora, sem data
    NOW — Valor padrão para timestamp atual
    Tipos Especiais
    ENUM — Lista de valores string possíveis
    UUID — Identificador único universal
    UUIDV1 / UUIDV4 — Valores padrão para geração de UUID
    JSON — Objeto JSON
    JSONB — JSON binário (PostgreSQL)
    ARRAY — Array de um tipo específico (PostgreSQL)
    RANGE — Range de um tipo (PostgreSQL)
    GEOGRAPHY — Dados geoespaciais
    GEOMETRY — Dados de geometria
    HSTORE — Armazenamento chave/valor (PostgreSQL)
    VIRTUAL — Campo apenas no modelo, não persiste no banco
Tipos Específicos do PostgreSQL
    MACADDR, MACADDR8 — Endereços MAC
    INET, CIDR — Tipos de rede IP
    TSVECTOR — Vetor de busca de texto
Propriedades Comuns
    type — Define o tipo de dado
    allowNull: false — Campo obrigatório
    primaryKey: true — Chave primária
    autoIncrement: true — Incrementa automaticamente
    defaultValue — Valor padrão
    unique: true — Valor único
    validate: {} — Validações customizadas
    comment — Comentário sobre o campo
