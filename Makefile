
build: clean copy

clean:
	rm -rf ./js
	rm -rf ./css
	rm -f index.html

copy:
	cp -r dist/* ./
