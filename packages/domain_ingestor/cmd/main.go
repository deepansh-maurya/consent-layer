package main

import (
	"fmt"

	"github.com/deepansh-maurya/domain-ingester/internal"
	"github.com/spf13/viper"
)

func main() {
	viper.SetConfigFile("config/config.yaml")
	err := viper.ReadInConfig()

	if err != nil {
		panic(err)
	}
	csvPath := viper.GetString("csv_path")
	dbName := viper.GetString("db_name")
	collName := viper.GetString("collection")
	mongoURI := viper.GetString("mongo_uri")

	fmt.Println(("loaded cofig"), viper.AllSettings())

	client, err := internal.ConnectMongo(mongoURI)
	if err != nil {
		panic(err)
	}

	coll := client.Database(dbName).Collection(collName)

	err = internal.IngestDomain(csvPath, coll)
	fmt.Println("Ingestion done!")
}
