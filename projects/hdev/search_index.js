var documenterSearchIndex = {"docs":
[{"location":"guide/check.html#Introduction","page":"d_check.py","title":"Introduction","text":"","category":"section"},{"location":"guide/check.html","page":"d_check.py","title":"d_check.py","text":"It is a Python script. It is only compatible with Python 3.x. The purpose of this script is to check whether the lines in a given file are ended with blanks.","category":"page"},{"location":"guide/check.html","page":"d_check.py","title":"d_check.py","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/check.html#Usage","page":"d_check.py","title":"Usage","text":"","category":"section"},{"location":"guide/check.html","page":"d_check.py","title":"d_check.py","text":"$ ./d_check.py file_name","category":"page"},{"location":"guide/sar.html#Introduction","page":"d_sar.sh","title":"Introduction","text":"","category":"section"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"It is a shell script. The purpose of this script is to scan a file or directory, and then replace some characters with given characters. So we name it as sar.sh (Scan And Replace). We can use it to preprocess many atom.config.in or solver.ctqmc.in files at the same time.","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/sar.html#Usage","page":"d_sar.sh","title":"Usage","text":"","category":"section"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"$ ./d_sar.sh","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"Before you start to use this shell script, you have to check and edit carefully the string match pattern.","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"For macOS system, the grammar for sed is (we don't generate backup)","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"sed -i '' ...","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"However, for Linux-based system, the grammar for sed is","category":"page"},{"location":"guide/sar.html","page":"d_sar.sh","title":"d_sar.sh","text":"sed -i ...","category":"page"},{"location":"guide/trim.html#Introduction","page":"d_trim.sh","title":"Introduction","text":"","category":"section"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"It is a shell script. The purpose of this script is to remove the trailing whitespaces in the given file.","category":"page"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/trim.html#Usage","page":"d_trim.sh","title":"Usage","text":"","category":"section"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"$ ./d_trim.sh file_name","category":"page"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"For macOS system, the grammar for sed is (we don't generate backup)","category":"page"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"$ sed -i '' ...","category":"page"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"However, for Linux-based system, the grammar for sed is","category":"page"},{"location":"guide/trim.html","page":"d_trim.sh","title":"d_trim.sh","text":"$ sed -i ...","category":"page"},{"location":"guide/arch.html#Introduction","page":"d_arch.sh","title":"Introduction","text":"","category":"section"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"It is a shell script. The purpose of this script is to create archive of files (in the working directory) from the current repo branch.","category":"page"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"The name of the output archive should like this:","category":"page"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"iqist_43e2cbb_1441276643.tar.gz","category":"page"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"Here 43e2cbb is the abbreviated commit hash, 1441276643 is the UNIX timestamp when this commit was committed, and iqist is the code name which is provided by the users.","category":"page"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/arch.html#Usage","page":"d_arch.sh","title":"Usage","text":"","category":"section"},{"location":"guide/arch.html","page":"d_arch.sh","title":"d_arch.sh","text":"$ ./d_arch.sh code_name","category":"page"},{"location":"index.html#hdev","page":"Home","title":"hdev","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"A collection of useful shell scripts","category":"page"},{"location":"index.html#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Shell scripts\nCreate archive for repo branch (d_arch.sh)\nFix @rpath problem (d_rpath.sh)\nSearch and replace (d_sar.sh)\nGet rid of trailing whitespaces (d_trim.sh)\nPython scripts\nCheck whether the lines are ended with blanks (d_check.py)\nRemove the dull .DS_Store files (d_clean.py)","category":"page"},{"location":"index.html#Author","page":"Home","title":"Author","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Li Huang\nInstitute of Materials, China Academy of Engineering Physics, Sichuan Jiangyou, PRC\nemail: lihuang.dmft at gmail.com","category":"page"},{"location":"guide/clean.html#Introduction","page":"d_clean.py","title":"Introduction","text":"","category":"section"},{"location":"guide/clean.html","page":"d_clean.py","title":"d_clean.py","text":"It is a Python script. It is only compatible with Python 3.x. The purpose of this script is to clean the dull .DS_Store files in the macOS system.","category":"page"},{"location":"guide/clean.html","page":"d_clean.py","title":"d_clean.py","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/clean.html#Usage","page":"d_clean.py","title":"Usage","text":"","category":"section"},{"location":"guide/clean.html","page":"d_clean.py","title":"d_clean.py","text":"$ ./d_clean.py directory_name","category":"page"},{"location":"guide/rpath.html#Introduction","page":"d_rpath.sh","title":"Introduction","text":"","category":"section"},{"location":"guide/rpath.html","page":"d_rpath.sh","title":"d_rpath.sh","text":"It is a shell script. The purpose of this script is to fix the @rpath symbol in the executable program in the macOS system.","category":"page"},{"location":"guide/rpath.html","page":"d_rpath.sh","title":"d_rpath.sh","text":"note: Note\nThis script should be used by the developer only.","category":"page"},{"location":"guide/rpath.html#Usage","page":"d_rpath.sh","title":"Usage","text":"","category":"section"},{"location":"guide/rpath.html","page":"d_rpath.sh","title":"d_rpath.sh","text":"$ ./d_rpath.sh file_name","category":"page"},{"location":"guide/rpath.html","page":"d_rpath.sh","title":"d_rpath.sh","text":"Perhaps before you use this script to fix your program, you have to modify this script to correct the path for Intel MKL. ","category":"page"}]
}
