#!/bin/bash

function wdilt() {
	NEW_DATE=$(date +"%m-%d-%y")
	yarn deploy
	git add .
	git commit -m ":speech_balloon: $NEW_DATE"
	git push
}

wdilt
