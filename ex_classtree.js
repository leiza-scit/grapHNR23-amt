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
        "id": "http://academic-meta-tool.xyz/vocab#LukasiewiczLogic",
        "parent": "http://academic-meta-tool.xyz/vocab#Logic",
        "type": "instance",
        "text": "LukasiewiczLogic (amt:LukasiewiczLogic)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/nonns_ProductLogic.html",
        "parent": "http://academic-meta-tool.xyz/vocab#Logic",
        "type": "instance",
        "text": "ProductLogic (amt:ProductLogic)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#GoedelLogic",
        "parent": "http://academic-meta-tool.xyz/vocab#Logic",
        "type": "instance",
        "text": "GoedelLogic (amt:GoedelLogic)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#Logic",
        "parent": "http://www.w3.org/2000/01/rdf-schema#Class",
        "type": "class",
        "text": "Logic (amt:Logic) [3]",
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
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/LimesPart",
        "parent": "http://academic-meta-tool.xyz/vocab#Concept",
        "type": "instance",
        "text": "Limes Part (ex:LimesPart)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#Concept",
        "parent": "http://www.w3.org/2000/01/rdf-schema#Class",
        "type": "class",
        "text": "Concept (amt:Concept) [1]",
        "data": {
          "to": {
            "http://academic-meta-tool.xyz/vocab#placeholder": {
              "instancecount": 1
            },
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://academic-meta-tool.xyz/vocab#instanceOf": {
              "instancecount": 0
            },
            "http://www.w3.org/2000/01/rdf-schema#domain": {
              "instancecount": 0,
              "http://academic-meta-tool.xyz/vocab#Role": 5
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 0,
              "http://academic-meta-tool.xyz/vocab#Role": 5
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/b",
        "parent": "http://academic-meta-tool.xyz/vocab#Role",
        "type": "instance",
        "text": "before (ex:b)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/a",
        "parent": "http://academic-meta-tool.xyz/vocab#Role",
        "type": "instance",
        "text": "after (ex:a)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/f",
        "parent": "http://academic-meta-tool.xyz/vocab#Role",
        "type": "instance",
        "text": "finishes (ex:f)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/eq",
        "parent": "http://academic-meta-tool.xyz/vocab#Role",
        "type": "instance",
        "text": "equals (ex:eq)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/sb",
        "parent": "http://academic-meta-tool.xyz/vocab#Role",
        "type": "instance",
        "text": "survived by (ex:sb)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#Role",
        "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
        "type": "class",
        "text": "Role (amt:Role) [5]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#domain": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Concept": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#isDefinedBy": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#range": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Concept": 1
            }
          },
          "from": {
            "http://academic-meta-tool.xyz/vocab#antecedent1": {
              "instancecount": 0,
              "http://academic-meta-tool.xyz/vocab#RoleChainAxiom": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate": {
              "instancecount": 0
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
        "parent": "#",
        "type": "class",
        "text": "Property (rdf:Property)",
        "data": {}
      },
      {
        "id": "n5a6a85c1204942b8999631af9a4facebb1",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "n5a6a85c1204942b8999631af9a4facebb1 (n5a6a85c1204942b8999631af9a4facebb1)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#Annotation",
        "parent": "#",
        "type": "class",
        "text": "Annotation (oa:Annotation) [1]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasBody": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasTarget": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Role": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#isDefinedBy": {
              "instancecount": 0,
              "http://academic-meta-tool.xyz/vocab#Role": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/RCA0001",
        "parent": "http://academic-meta-tool.xyz/vocab#RoleChainAxiom",
        "type": "instance",
        "text": "RCA0001 (ex:RCA0001)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/RCA0002",
        "parent": "http://academic-meta-tool.xyz/vocab#RoleChainAxiom",
        "type": "instance",
        "text": "RCA0002 (ex:RCA0002)",
        "data": {}
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#RoleChainAxiom",
        "parent": "http://academic-meta-tool.xyz/vocab#InferenceAxiom",
        "type": "class",
        "text": "RoleChainAxiom (amt:RoleChainAxiom) [2]",
        "data": {
          "to": {
            "http://academic-meta-tool.xyz/vocab#antecedent1": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Role": 1
            },
            "http://academic-meta-tool.xyz/vocab#antecedent2": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Role": 1
            },
            "http://academic-meta-tool.xyz/vocab#consequent": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Role": 1
            },
            "http://academic-meta-tool.xyz/vocab#logic": {
              "instancecount": 1,
              "http://academic-meta-tool.xyz/vocab#Logic": 1
            },
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "http://academic-meta-tool.xyz/vocab#InferenceAxiom",
        "parent": "#",
        "type": "class",
        "text": "InferenceAxiom (amt:InferenceAxiom)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/Concept_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Concept Instances Collection (ex:Concept_collection)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/Role_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Role Instances Collection (ex:Role_collection)",
        "data": {}
      },
      {
        "id": "http://leiza-scit.sparqlunicorn.cloud/amtlimes/RoleChainAxiom_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "RoleChainAxiom Instances Collection (ex:RoleChainAxiom_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [3]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 2,
              "http://academic-meta-tool.xyz/vocab#RoleChainAxiom": 2
            }
          },
          "from": {}
        },
        "instancecount": 6
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