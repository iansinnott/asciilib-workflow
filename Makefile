.PHONY: clean

all: clean build

build: search AsciiSearch.alfredworkflow

clean:
	rm ./search
	rm ./AsciiSearch.alfredworkflow

search:
	yarn build

./AsciiSearch.alfredworkflow:
	./node_modules/.bin/awf export .
	mv iansinnott.asciisearh.alfredworkflow AsciiSearch.alfredworkflow
