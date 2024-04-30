var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://academic-meta-tool.xyz/vocab#InferenceAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#Axiom",
        "type": "instance",
        "text": "InferenceAxiom (amt:InferenceAxiom)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#IntegrityAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#Axiom",
        "type": "instance",
        "text": "IntegrityAxiom (amt:IntegrityAxiom)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#Axiom",
        "parent": "#",
        "type": "class",
        "text": "Axiom (amt:Axiom)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/nonns_RoleChainAxiom.html",
        "parent": "http://academic-meta-tool.xyz/vocab#InferenceAxiom",
        "type": "instance",
        "text": "RoleChainAxiom (amt:RoleChainAxiom)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#InverseAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#InferenceAxiom",
        "type": "instance",
        "text": "InverseAxiom (amt:InverseAxiom)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#DisjointAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#IntegrityAxiom",
        "type": "instance",
        "text": "DisjointAxiom (amt:DisjointAxiom)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#SelfDisjointAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#IntegrityAxiom",
        "type": "instance",
        "text": "SelfDisjointAxiom (amt:SelfDisjointAxiom)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/nonns_Concept.html",
        "parent": "http://www.w3.org/2000/01/rdf-schema#Class",
        "type": "class",
        "text": "Concept (amt:Concept)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2000/01/rdf-schema#Class",
        "parent": "#",
        "type": "class",
        "text": "Class (rdfs:Class)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#Logic",
        "parent": "http://www.w3.org/2000/01/rdf-schema#Class",
        "type": "class",
        "text": "Logic (amt:Logic)",
        "data": {}
      }
    ]
  },
  "@context": {
    "@version": 1.1,
    "foaf": "http://xmlns.com/foaf/0.1/",
    "ct": "http://purl.org/vocab/classtree#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "icon": "foaf:image",
    "id": "@id",
    "parent": "rdfs:subClassOf",
    "halfgeoclass": "ct:HalfGeoClass",
    "geoclass": {
      "@type": "ct:icontype",
      "@id": "ct:GeoClass"
    },
    "collectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:CollectionClass"
    },
    "featurecollectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:FeatureCollectionClass"
    },
    "class": "owl:Class",
    "instance": "owl:NamedIndividual",
    "geoinstance": {
      "@type": "ct:Icontype",
      "@id": "ct:GeoNamedIndividual"
    },
    "text": "rdfs:label",
    "type": "ct:icontype",
    "types": "ct:icontypes",
    "core": {
      "@type": "ct:TreeConfig",
      "@id": "@nest"
    },
    "data": {
      "@id": "ct:treeitem",
      "@type": "ct:TreeItem"
    }
  }
}